import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import renderCharts from "./graphs";
import { populateSidebar } from "./sidebar";
import { writeCommentsToDom } from "./qualitative";

renderCharts();
populateSidebar();
writeCommentsToDom();
