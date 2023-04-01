import {
    CourseCard,
    CourseImage,
    CourseTitle,
    CourseDescription,
    StartBtn,
    LinkItem,
} from "./CCStyledComponents";

const CoursesCards = (props) => {
    const { eachCourse } = props;
    const { title, image, description } = eachCourse;
    console.log(description);
    const cid = title.split(" ").join("-");

    return (
        <CourseCard>
            <CourseImage src={image} alt={title} />
            <CourseTitle>{title}</CourseTitle>
            <CourseDescription>{description}</CourseDescription>
            <LinkItem to={`/learn-${cid}`}>
                <StartBtn>Start Learning</StartBtn>
            </LinkItem>
        </CourseCard>
    );
};

export default CoursesCards;
