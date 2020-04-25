export interface Article {
    type_of: string;
    id: number;
    title: string;
    description: string;
    cover_image?: string;
    readable_publish_date: string;
    social_image: string;
    tag_list: string[];
    tags: string;
    slug: string;
    path: string;
    url: string;
    canonical_url: string;
    comments_count: number;
    positive_reactions_count: number;
    collection_id: null;
    created_at: string;
    edited_at: string;
    crossposted_at: null;
    published_at: string;
    last_comment_at: string;
    published_timestamp: string;
    user: {
        name: string;
        username: string;
        twitter_username: string;
        github_username: string;
        website_url: string;
        profile_image: string;
        profile_image_number: string;
    };
    organization: {
        name: string;
        username: string;
        slug: string;
        profile_image: string;
        profile_image_number: string;
    }
}