import './blogs.css';
import clockicon from './../../assets/img/icons/clock.png';
import blog1 from './../../assets/img/blogs/blog1.png';

const Blog = () => {
  return (
    <div className="pd blog_container">
      <h1 className="blog_title">How to select the right CV template?</h1>
      <span className="blog_time"><img src={clockicon} /> 2 min read</span>
      <div className="blog_img"><img src={blog1} /></div>
      <p className="blog_content">
        The template that you choose could have a direct impact on your success. <br /><br/>

        Typically, employers have a quick speed read of your CV to make sure you have all the skills and qualities they’re looking for. Choosing the right template can have an impact on this part of the process too as some are easier to speed read than others. <br /><br/>

        Choosing the right template isn’t as simple as finding one that you like the look of – it also needs to perform well. <br /><br/>

        Here are some pointers that will serve you well across every industry, level & geographical region. <br /><br/>

        1. Look for a linear layout <br /><br/>

        2. Make sure your name and contact details will be clearly displayed at the top of the CV<br /><br/>

        3. A little bit of colour – in the headings or section divides for example, can help the CV to stand out.<br /><br/>

        4. Choose a professional font that is easy to read and keep it consistent throughout the CV. Some examples include Arial, Calibri, Times New Roman and Lucida Sans<br /><br/>

        The most important thing to remember is that our CV templates take the hassle of formatting away.. Employers are looking for well written content to bring the template to life!
      </p>
    </div>
  )
}
export default Blog;
