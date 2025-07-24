import { Pagination } from "react-bootstrap";

const CustomPagination = ({
  totalPages,
  currentPage,
  onPageChange,
  maxDisplayed = 5,
}) => {
  const renderPaginationItems = () => {
    const pageItems = [];

    if (totalPages <= maxDisplayed) {
      for (let i = 1; i <= totalPages; i++) {
        pageItems.push(
          <Pagination.Item
            key={i}
            active={currentPage === i}
            onClick={() => onPageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      const leftSide = Math.max(currentPage - 1, 2);
      const rightSide = Math.min(currentPage + 1, totalPages - 1);

      // First page
      pageItems.push(
        <Pagination.Item
          key={1}
          active={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          1
        </Pagination.Item>
      );

      if (leftSide > 2) {
        pageItems.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
      }

      for (let i = leftSide; i <= rightSide; i++) {
        pageItems.push(
          <Pagination.Item
            key={i}
            active={currentPage === i}
            onClick={() => onPageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }

      if (rightSide < totalPages - 1) {
        pageItems.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
      }

      pageItems.push(
        <Pagination.Item
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return pageItems;
  };

  return (
    <Pagination className="mt-3">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      />
      {renderPaginationItems()}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      />
    </Pagination>
  );
};

export default CustomPagination;
