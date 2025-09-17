import { IoIosArrowUp } from "react-icons/io";
import useScrollToTop from "../../hooks/useScrollToTop";

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <div className="fixed bottom-5 right-5 transition-all">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-100 bg-opacity-30 backdrop-blur-md backdrop:bg-transparent hover:bg-gray-700 text-white p-3 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-center  hover:bg-opacity-50"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="w-5 h-5 items-center justify-center" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
