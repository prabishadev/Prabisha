import {
    CourseCard,
    CourseInfo,
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
            <CourseInfo>
            <CourseTitle>{title}</CourseTitle>
            <CourseDescription>{description}</CourseDescription>
            <LinkItem to={`/learn-${cid}`}>
                <StartBtn>Start Learning</StartBtn>
            </LinkItem>
            </CourseInfo>
        </CourseCard>
    );
};

export default CoursesCards;
