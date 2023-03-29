import {
  Section2M,
  Section2MInfo1Container,
  Section2MInfo1,
  Section2MInfo2,
  Section2MInfo3,
  Section2MInfo4,
  Section2MInfo3Span1,
  Section2MInfo3Span2,
  Text,
  Section3M,
  ContactInfo,
  ContactInfo1,
  QueryInfo,
  Section31M,
  Section32M,
  Section31M1,
  ContactForm,
  Input,
  Select,
  Option,
  Button,
  Section4M,
  Section41M,
  Section42M,
  Image,
  Phone,
  Mail,
  Section5M,
  Section6M,
  Section6M1,
  RecentWorkSection,
  Section6MImage,
} from "./WebDevelopmentStyledComponents";

const WebsiteDevelopmentSection = () => {
  return (
    <>
      <Section2M>
        <Section2MInfo1Container>
          <Section2MInfo1>
            Bespoke &amp; Professional Website Development &amp; Design
          </Section2MInfo1>
          <Section2MInfo2>
            Bring digitalisation to your service &amp; social proof to your
            customers! Get the premium quality &amp; engaging copy of websites
            with a touch of modern &amp; latest technology.
          </Section2MInfo2>
        </Section2MInfo1Container>
        <Section2MInfo1Container>
          <Section2MInfo3>
            <Section2MInfo3Span1>Solid Navigation </Section2MInfo3Span1>|{" "}
            <Section2MInfo3Span2>Responsive Design </Section2MInfo3Span2>|
            <Section2MInfo3Span1> Attractive Visual | </Section2MInfo3Span1>{" "}
            <Section2MInfo3Span2>Engaging Copy</Section2MInfo3Span2>
          </Section2MInfo3>
          <Section2MInfo4>
            Give your business a new height of success, growth &amp; visibility
            with professional web development services. We’re specialised in
            developing &amp; designing websites with cutting-edge technology.
            Understanding the present flow of marketing, Prabisha Consulting is
            able to add a 360-degree transformation to your brand by developing
            eye-catchy &amp; user-friendly websites.
          </Section2MInfo4>
        </Section2MInfo1Container>
      </Section2M>
      <Section3M>
        <Section2MInfo1>
          We are the leading website development company in London
        </Section2MInfo1>
        <Section31M>
          <Section32M>
            <Section2MInfo4>
              One well-structured website can speak for your brand. In this
              digital world, websites can open an online gateway for your
              business. Nowadays, people have become online-savvy &amp;
              preferred to research brands’ specialities, offers, services &amp;
              even compare them with others before buying or taking the foremost
              step. This is how they are able to get the most reliable &amp;
              profitable products for their niche. You can easily attract your
              targeted customers with a website that describes your business
              &amp; services. Websites are not only able to educate your clients
              about brand &amp; service but also provide online visibility and
              social proof. The benefits of having a website mean you are ahead
              of your competitors in making sales, conversions &amp; leads. The
              organic growth of the website in search engines also gives you a
              loyal customer base who would have a high chance to enter your
              sales funnel.&nbsp;
            </Section2MInfo4>
            <QueryInfo>
              Do you have any query? Please feel free to reach us
            </QueryInfo>
            <ContactInfo>
              <ContactInfo1>
                <Phone />
                <Text>
                  <sup>+</sup>44(0)7867090363
                </Text>
              </ContactInfo1>
              <ContactInfo1>
                <Mail />
                <Text>care@prabisha.co.uk</Text>
              </ContactInfo1>
            </ContactInfo>
          </Section32M>
          <Section31M1>
            <ContactForm type="submit">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="number" placeholder="Mobile" />
              <Select placeholder="Service">
                <Option>Digital Marketing</Option>
                <Option>Website Development</Option>
                <Option>SEO</Option>
                <Option>Graphics Design</Option>
              </Select>
              <Button>SUBMIT</Button>
            </ContactForm>
          </Section31M1>
        </Section31M>
      </Section3M>

      <Section4M>
        <Section41M>
          <Section2MInfo2>
            At Prabisha Consulting, we understand that your website is often the
            first interaction the potential customers have with your brand.
            Therefore, our web development services focus on creating an
            attractive and user-friendly website that will make a great first
            impression and help you achieve your business goals. Our team of
            experienced developers and designers combines modern web
            technologies with innovative marketing approaches to create a
            visually appealing website that’s easy to navigate.
          </Section2MInfo2>
          <Button>CONTACT US</Button>
        </Section41M>
        <Section42M>
          <Image
            src="https://www.prabisha.co.uk/wp-content/uploads/2022/12/website-design.jpg"
            alt="webiste design"
          />
        </Section42M>
      </Section4M>
      <Section5M>
        <Section2MInfo1>
          As an experienced Web design agency in UK, we help Startups/SMEs to
          grow with modern technology.
        </Section2MInfo1>
        <Section2MInfo4>
          Your website is the first step of many in the customer service
          journey. If your website makes an excellent first impression, your
          audience will likely continue engaging with your brand. You can make
          your website more inviting by keeping the design modern and bright.
          This will give visitors the impression that you are open to new
          people.
        </Section2MInfo4>
        <Section2MInfo4>
          Build an effective &amp; trustable relationship with your customers
          with interactive websites. It would be best to consider what your
          targeted customers are looking for in your brand. Customers devote
          their research looking for professional, credible, user-friendly &amp;
          quality products. If you have these four perfectly embedded into your
          website, then BOOM! You will be able to witness the drastic traffic,
          sales, and leads on your high-quality website. If you are looking for
          web design agencies in London, get in touch with us, our dedicated web
          developers can give you a full consultation on web technology,
          development &amp; design, and why it’s crucial for every business.
        </Section2MInfo4>
      </Section5M>
      <Section6M>
        <Section2MInfo1>Our Recent Work</Section2MInfo1>
        <RecentWorkSection>
          <Section6M1>
            <Section6MImage
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/11/shubhfinal-uk.jpg"
              alt=""
            />
          </Section6M1>
          <Section6M1>
            <Section6MImage
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/11/hashtag-final.jpg"
              alt=""
            />
          </Section6M1>
          <Section6M1>
            <Section6MImage
              src="https://www.prabisha.co.uk/wp-content/uploads/2022/11/gogopala-go-final-okay.jpg"
              alt=""
            />
          </Section6M1>
        </RecentWorkSection>
      </Section6M>
    </>
  );
};

export default WebsiteDevelopmentSection;
