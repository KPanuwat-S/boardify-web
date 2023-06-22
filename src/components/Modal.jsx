export default function Modal({ children, width = 27, onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
      <div className="fixed inset-0 z-30 " onClick={onClose}>
        <div className="flex justify-center items-center min-h-full ">
          <div
            style={{ maxWidth: `${width}rem` }}
            className="p-6 bg-white rounded-lg w-full shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col overflow-hidden max-h-[calc(100vh-2rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between text-black"></div>
            <div className="flex ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
