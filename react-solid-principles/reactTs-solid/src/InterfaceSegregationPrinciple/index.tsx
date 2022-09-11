import { FC } from 'react';

type PostType = {
    title: string;
    author: {
        name: string;
        age: number;
    };
    createdAt: Date;
}

const Post = ({ post }: { post: PostType }) => {

    return (
        <div>
            <PostTitle title={post.title} />
            <span>author: {post.author.name}</span>
            <PostDate createdAt={post.createdAt} />
        </div>
    )
}

type Props = {
    title: string;
}

const PostTitle: FC<Props> = ({ title }) => {
    return <h1>{title}</h1>;
}

type DateProps = {
    createdAt: Date;
}

const PostDate: FC<DateProps> = ({ createdAt }) => {
    return <time>{createdAt.toString()}</time>;
}

export default Post;