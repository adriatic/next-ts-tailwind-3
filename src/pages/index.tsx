export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="...">01</div>
        <div className="...">02</div>
        <div className="...">03</div>
        <div className="col-span-2 ...">04</div>
        <div className="...">05</div>
        <div className="...">06</div>
        <div className="col-span-2 ...">07</div>
      </div>
      ​
      <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello
        <br />
        World
      </span>
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Hello
        <br />
        World
      </span>
    </div>
  );
}
