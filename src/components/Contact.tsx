export default function Contact() {
  return (
    <div className="flex flex-col justify-between items-center gap-3">
      <a
        href="mailto:hello@example.com"
        target="blank"
        className="border rounded-full p-3 bg-gray-200"
      >
        Email me
      </a>
      <a
        href="https://www.linkedin.com/in/gaultierpatrice/"
        target="blank"
        className="border rounded-full p-3 bg-gray-200"
      >
        Contact Linkedin
      </a>
      <a
        href="https://github.com/gaultierpatrice"
        target="blank"
        className="border rounded-full p-3 bg-gray-200"
      >
        Github
      </a>
    </div>
  );
}
