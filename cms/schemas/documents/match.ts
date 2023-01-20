// @ts-nocheck
export default {
    name: "match",
    title: "Match",
    type: "document",
    preview: {
        select: {
            subtitle: "title",
        },
        prepare({ subtitle, media }) {
            return {
                title: "Agency",
                subtitle: subtitle,
                media: media
            }
        }
    },
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "title of the match",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a title for the match"
            )
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: rule => rule.required()
        },
        {
            name: "date",
            title: "Date",
            description: "the date for the match",
            validation: rule => rule.required()
        },
        {
            name: "homeTeam",
            title: "Home Team",
            type: "reference",
            to: { type: "team" },
            validation: rule => rule.required()
        },
        {
            name: "awayTeam",
            title: "Away Team",
            type: "reference",
            to: { type: "team" },
            validation: rule => rule.required()
        },
    ]
}