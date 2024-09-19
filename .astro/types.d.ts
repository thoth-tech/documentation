declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"policies/GitHub-Management-Policy.md": {
	id: "policies/GitHub-Management-Policy.md";
  slug: "policies/github-management-policy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"policies/Thoth Tech Onboarding Document.md": {
	id: "policies/Thoth Tech Onboarding Document.md";
  slug: "policies/thoth-tech-onboarding-document";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"policies/Trello-Management-Policy.md": {
	id: "policies/Trello-Management-Policy.md";
  slug: "policies/trello-management-policy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/Documentation/documenting-for-thoth-tech.md": {
	id: "processes/Documentation/documenting-for-thoth-tech.md";
  slug: "processes/documentation/documenting-for-thoth-tech";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/Documentation/writing-style-guide.md": {
	id: "processes/Documentation/writing-style-guide.md";
  slug: "processes/documentation/writing-style-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/Introduction.md": {
	id: "processes/Introduction.md";
  slug: "processes/introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/cyber-security-guidelines/remote-working-guide.md": {
	id: "processes/cyber-security-guidelines/remote-working-guide.md";
  slug: "processes/cyber-security-guidelines/remote-working-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/git-contributions-guide.md": {
	id: "processes/quality-assurance/git-contributions-guide.md";
  slug: "processes/quality-assurance/git-contributions-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/quality-assurance-overview.md": {
	id: "processes/quality-assurance/quality-assurance-overview.md";
  slug: "processes/quality-assurance/quality-assurance-overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/templates/bug-report-template.md": {
	id: "processes/quality-assurance/templates/bug-report-template.md";
  slug: "processes/quality-assurance/templates/bug-report-template";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/templates/pr-template.md": {
	id: "processes/quality-assurance/templates/pr-template.md";
  slug: "processes/quality-assurance/templates/pr-template";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/templates/srs-template.md": {
	id: "processes/quality-assurance/templates/srs-template.md";
  slug: "processes/quality-assurance/templates/srs-template";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/templates/test-plan-template.md": {
	id: "processes/quality-assurance/templates/test-plan-template.md";
  slug: "processes/quality-assurance/templates/test-plan-template";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/templates/test-strategy-template.md": {
	id: "processes/quality-assurance/templates/test-strategy-template.md";
  slug: "processes/quality-assurance/templates/test-strategy-template";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"processes/quality-assurance/testing-and-dev.md": {
	id: "processes/quality-assurance/testing-and-dev.md";
  slug: "processes/quality-assurance/testing-and-dev";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/art-gallery/example.mdx": {
	id: "products/art-gallery/example.mdx";
  slug: "products/art-gallery/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"products/company-operations/documentation/Choosing a Documentation Platform.md": {
	id: "products/company-operations/documentation/Choosing a Documentation Platform.md";
  slug: "products/company-operations/documentation/choosing-a-documentation-platform";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/example.mdx": {
	id: "products/company-operations/example.mdx";
  slug: "products/company-operations/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"products/company-operations/issues-and-resolution/Enable Bullet Points in Markdown Tables.md": {
	id: "products/company-operations/issues-and-resolution/Enable Bullet Points in Markdown Tables.md";
  slug: "products/company-operations/issues-and-resolution/enable-bullet-points-in-markdown-tables";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/projects/docusaurus-documentation/Docusaurus Spike Outcome.md": {
	id: "products/company-operations/projects/docusaurus-documentation/Docusaurus Spike Outcome.md";
  slug: "products/company-operations/projects/docusaurus-documentation/docusaurus-spike-outcome";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/projects/docusaurus-documentation/Docusaurus Spike Plan.md": {
	id: "products/company-operations/projects/docusaurus-documentation/Docusaurus Spike Plan.md";
  slug: "products/company-operations/projects/docusaurus-documentation/docusaurus-spike-plan";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/projects/docusaurus-documentation/Options for Hosting Docusaurus Website.md": {
	id: "products/company-operations/projects/docusaurus-documentation/Options for Hosting Docusaurus Website.md";
  slug: "products/company-operations/projects/docusaurus-documentation/options-for-hosting-docusaurus-website";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/projects/docusaurus-documentation/Prior Learning Outcome for Documentation Website.md": {
	id: "products/company-operations/projects/docusaurus-documentation/Prior Learning Outcome for Documentation Website.md";
  slug: "products/company-operations/projects/docusaurus-documentation/prior-learning-outcome-for-documentation-website";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/projects/docusaurus-documentation/Research on Docusaurus.md": {
	id: "products/company-operations/projects/docusaurus-documentation/Research on Docusaurus.md";
  slug: "products/company-operations/projects/docusaurus-documentation/research-on-docusaurus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/company-operations/projects/docusaurus-documentation/Spike Outcome_Hosting Docusaurus on Render.md": {
	id: "products/company-operations/projects/docusaurus-documentation/Spike Outcome_Hosting Docusaurus on Render.md";
  slug: "products/company-operations/projects/docusaurus-documentation/spike-outcome_hosting-docusaurus-on-render";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/courseflow/example.mdx": {
	id: "products/courseflow/example.mdx";
  slug: "products/courseflow/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-compose-with-wsl2.md": {
	id: "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-compose-with-wsl2.md";
  slug: "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-compose-with-wsl2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-setup-tutorial.md": {
	id: "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-setup-tutorial.md";
  slug: "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/docker-setup-tutorial";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/setting-up-doubtfire.md": {
	id: "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/setting-up-doubtfire.md";
  slug: "products/ontrack/documentation/front-end-migration/deploy-ontrack-using-docker/setting-up-doubtfire";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/ontrack/documentation/front-end-migration/introduction.md": {
	id: "products/ontrack/documentation/front-end-migration/introduction.md";
  slug: "products/ontrack/documentation/front-end-migration/introduction";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/ontrack/documentation/numbas/Numbas Feasibility Check.md": {
	id: "products/ontrack/documentation/numbas/Numbas Feasibility Check.md";
  slug: "products/ontrack/documentation/numbas/numbas-feasibility-check";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/ontrack/example.mdx": {
	id: "products/ontrack/example.mdx";
  slug: "products/ontrack/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"products/ontrack/issues-and-resolution/troubleshooting doubtfire setup.md": {
	id: "products/ontrack/issues-and-resolution/troubleshooting doubtfire setup.md";
  slug: "products/ontrack/issues-and-resolution/troubleshooting-doubtfire-setup";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/products.mdx": {
	id: "products/products.mdx";
  slug: "products/products";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"products/splashkit/applications/Applications Epic-T12022.md": {
	id: "products/splashkit/applications/Applications Epic-T12022.md";
  slug: "products/splashkit/applications/applications-epic-t12022";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"products/splashkit/example.mdx": {
	id: "products/splashkit/example.mdx";
  slug: "products/splashkit/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"reference/example.md": {
	id: "reference/example.md";
  slug: "reference/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"teams-and-leadership/leadership-t2-2023.md": {
	id: "teams-and-leadership/leadership-t2-2023.md";
  slug: "teams-and-leadership/leadership-t2-2023";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"teams-and-leadership/organizational-structure-t2-2023.md": {
	id: "teams-and-leadership/organizational-structure-t2-2023.md";
  slug: "teams-and-leadership/organizational-structure-t2-2023";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"teams-and-leadership/team-members-t2-2023.md": {
	id: "teams-and-leadership/team-members-t2-2023.md";
  slug: "teams-and-leadership/team-members-t2-2023";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}