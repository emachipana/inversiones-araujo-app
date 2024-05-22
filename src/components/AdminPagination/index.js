import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { COLORS, FlexRow, Text } from "../../styles";

function AdminPagination({ currentPage, lastPage, links = {}, onClick }) {
  const { prev, next } = links;

  const handleClick = (link) => {
    if(!link) return;

    window.scrollTo(0, 0);
    onClick(link);
  }

  return (
    <FlexRow>
      <FaChevronLeft
        color={COLORS.dim}
        style={{cursor: "pointer"}}
        size={18}
        onClick={() => handleClick(prev)}
      />
      <Text
        weight={700}
        color={COLORS.dim}
        size={17}
      >
        { currentPage } de { lastPage }
      </Text>
      <FaChevronRight 
        color={COLORS.dim}
        style={{cursor: "pointer"}}
        size={18}
        onClick={() => handleClick(next)}
      />
    </FlexRow>
  );
}

export default AdminPagination;
