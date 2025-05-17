import "./style.css";
function Loading() {
  return (
    <section className=" overflow-hidden">
      <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
      <h1 className=" text-center text-red-900 text-5xl font-extrabold">
        Portfolio
      </h1>
    </section>
  );
}
export default Loading;
