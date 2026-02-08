export default function Header() {
  return (
    <div className="flex flex-row min-h-[20vh] justify-around w-full bg-[url(../public/image/background/img_header.jpg)] bg-size-[auto_1280px] bg-center bg-no-repeat">
      <h1 className="pl-3">Gaultier Patrice Portfolio</h1>
      <img
        src="image/PhotoProfilOk.jpg"
        className="h-20 md:h-30 xl:h-40 mt-5 rounded-4xl pr-2"
      />
    </div>
  );
}
