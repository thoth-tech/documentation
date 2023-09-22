import json
import csv

# Load the JSON file
with open('Trello.json', 'r') as file:
    data = json.load(file)

# Define the backlogs of interest/Sprints Of interest
backlogs_of_interest_names = [
    "Sprint 1 -Upstream Review", "Sprint 1 Complete",
    "Sprint 2 Code Review", "Sprint 2 -Upstream Review", "Sprint 2 Complete",
    "Sprint 3 Review", "Sprint 3 Complete",
    "Sprint 4 Review", "Sprint 4 Complete",
    "Numbas - Code-Review", "Numbas - Complete"
]

# Map the list names to their IDs/Names
list_id_to_name_mapping = {}
backlogs_of_interest = []

for list_ in data["lists"]:
    if list_["name"] in backlogs_of_interest_names:
        backlogs_of_interest.append(list_["id"])
        list_id_to_name_mapping[list_["id"]] = list_["name"]


# Extract members
members = {member["id"]: member["fullName"] for member in data["members"]}

# Process cards
cards_by_member = {}
total_story_points = {}
for card in data["cards"]:
    if card["idList"] in backlogs_of_interest:
        for member in card["idMembers"]:
            if member in cards_by_member:
                cards_by_member[member].append(card)
            else:
                cards_by_member[member] = [card]
            
            # Extract story points
            story_points = 0
            for plugin_data in card.get("pluginData", []):
                if "storyPoints" in plugin_data["value"]:
                    story_points = int(json.loads(plugin_data["value"])["storyPoints"])
            
            # Update total story points for member
            if member in total_story_points:
                total_story_points[member] += story_points
            else:
                total_story_points[member] = story_points

# Write the CSV
with open('OntrackTrelloReview.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(["Sprint", "Full Name", "Card Name", "GitHub Link", "Story Points", "Total Story Points"])
    
    for member_id, cards in cards_by_member.items():
        for index, card in enumerate(cards):
            # Extract story points for the current card
            story_points = 0
            for plugin_data in card.get("pluginData", []):
                if "storyPoints" in plugin_data["value"]:
                    story_points = int(json.loads(plugin_data["value"])["storyPoints"])
            
            # Check for GitHub related info
            github_link = None
            for attachment in card.get("attachments", []):
                if "github.com" in attachment["url"]:
                    github_link = attachment["url"]
                    break

            # Determine if we should show the total story points for this row
            show_total = total_story_points[member_id] if index == len(cards) - 1 else ""
            
            sprint_name = list_id_to_name_mapping[card["idList"]]
            writer.writerow([sprint_name, members[member_id], card["name"], github_link, story_points, show_total])

