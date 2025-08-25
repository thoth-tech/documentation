import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory to search
const docsDir = path.resolve(__dirname, './content/docs'); // or './content/docs'

/**
 * Recursively get all .md files in a directory.
 * @param {string} dir - Directory path to search.
 * @returns {string[]} - Array of file paths.
 */
function getMarkdownFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            results = results.concat(getMarkdownFiles(filePath));
        } else if (filePath.endsWith('.md')) {
            results.push(filePath);
        }
    });
    return results;
}

/**
 * Retrieve the last Git commit metadata for a file.
 * @param {string} file - File path.
 * @returns {{ author: string, date: string }}
 */
function getGitMetadata(file) {
    let author = 'Unknown';
    let date = 'Unknown';
    try {
        author = execSync(`git log -1 --pretty=format:%an "${file}"`).toString().trim();
        date = execSync(`git log -1 --pretty=format:%ad --date=format:'%d/%m/%Y' "${file}"`).toString().trim();
    } catch (error) {
        console.error(`Error getting git metadata for ${file}: ${error.message}`);
    }
    return { author, date };
}

/**
 * Update a Markdown file by inserting last updated metadata.
 * The metadata is inserted right after the YAML frontmatter, if present.
 * If there is no frontmatter, the metadata is added at the top.
 *
 * @param {string} file - Path to the markdown file.
 */
function updateFile(file) {
    const { author, date } = getGitMetadata(file);
    const content = fs.readFileSync(file, 'utf8');

    let yamlFront = '';
    let restContent = content;

    // Check if file starts with YAML frontmatter delimiter '---'
    if (content.startsWith('---')) {
        // Find the end of the YAML block (the second occurrence of '---')
        const secondDelimiterIndex = content.indexOf('\n---', 3);
        if (secondDelimiterIndex !== -1) {
            // Include the entire YAML block (up to and including the second delimiter line)
            const endOfYaml = content.indexOf('\n', secondDelimiterIndex + 1);
            if (endOfYaml !== -1) {
                yamlFront = content.substring(0, endOfYaml).trimEnd() + '\n';
                restContent = content.substring(endOfYaml + 1);
            }
        }
    }

    const metadataBlock = `**Last updated by:** ${author}, **Last updated on:** ${date}\n\n`;

    // Insert metadata block
    const updatedContent = yamlFront
    ? `${yamlFront}\n${metadataBlock}${restContent}`
    : `${metadataBlock}${restContent}`;

    fs.writeFileSync(file, updatedContent, 'utf8');
    console.log(`Updated metadata in ${file}`);
}

// Get all markdown files in the docs directory
const markdownFiles = getMarkdownFiles(docsDir);

// Process each file
markdownFiles.forEach(updateFile);
