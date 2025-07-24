import { truncateText } from "@/utils/text";
import { useState } from "react";

const DeskripsiService = ({ htmlContent, length = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayContent = () => {
    if (isExpanded) return htmlContent;
    return truncateText({
      text: htmlContent.replace(/<[^>]+>/g, ""),
      length,
    });
  };

  return (
    <div className="border rounded-1 p-2">
      <p
        dangerouslySetInnerHTML={{
          __html: getDisplayContent(),
        }}
      />
      {htmlContent.length > 100 && (
        <button
          className="btn btn-link p-0 mt-2"
          onClick={handleToggle}
          style={{ fontSize: "14px" }}
        >
          {isExpanded ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
        </button>
      )}
    </div>
  );
};

export default DeskripsiService;
