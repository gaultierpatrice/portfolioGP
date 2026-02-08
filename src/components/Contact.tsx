export default function Contact() {
  return (
    <>
      <h2 className="p-5">Contacts</h2>
      <div className="flex flex-row lg:flex-col justify-around items-center gap-3">
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
          Linkedin
        </a>
        <a
          href="https://github.com/gaultierpatrice"
          target="blank"
          className="border rounded-full p-3 bg-gray-200"
        >
          Github
        </a>
      </div>
    </>
  );
}
