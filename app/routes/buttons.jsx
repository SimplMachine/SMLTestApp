export const meta = () => ({
  charset: "utf-8",
  title: "Simpl Machine - Buttons Demo",
  viewport: "width=device-width,initial-scale=1",
});
export default function Index() {
  return (
    <section>
      <p>
        This page will have buttons in various states that we can use to test
        selecting
      </p>
      <button onClick={() => {}} className='just-a-button'>
        Hey man
      </button>
    </section>
  );
}
