function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="border border-brand text-charcoalblack cursor-pointer bg-brand rounded-[4px] py-[11px] px-[150.5px] flex items-center justify-center hover:bg-brandActive active:bg-brand active:animate-btnbounce"
      type="button"
      onClick={() => console.log("btn clicked")}
    >
      <span className="relative text-sm font-normal">{children}</span>
    </button>
  );
}

export { Button };
