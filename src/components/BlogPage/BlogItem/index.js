import {
  BlogCard,
  BlogImage,
  BlogTitle,
  BlogKeyTerm,
  BlogDescription,
  BlogDescriptionContainer
} from "./BlogItemStyledComponents";

const BlogItem = (props) => {
  const { data } = props;
  const { title,imageUrl,keyvalue,description } = data;
  console.log(data);
  return (
    <BlogCard>
      <BlogImage src={imageUrl} alt={title} />
      <BlogDescriptionContainer>
      <BlogTitle>{title}</BlogTitle>
      <BlogKeyTerm>Leave a Comment / {keyvalue}/By admin </BlogKeyTerm>
      <BlogDescription>{description}</BlogDescription>
      </BlogDescriptionContainer>
      <hr />
    </BlogCard>
  );
};

export default BlogItem;