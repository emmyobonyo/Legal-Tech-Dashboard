// eslint-disable @typescript-eslint/no-unused-vars

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import DescriptionIcon from "@mui/icons-material/Description";

function ReportsCard({
  reportName,
  updatedAt,
  format,
}: {
  reportName: string;
  updatedAt: string;
  format: string;
}) {
  const renderIcons = () => {
    if (format === "PDF") {
      return <PictureAsPdfIcon className="text-red-500 mr-3" />;
    } else if (format == "Word Document") {
      return <ArticleIcon className="text-blue-400 mr-3" />;
    } else {
      return <DescriptionIcon className="text-green-400 mr-3" />;
    }
  };

  console.log(updatedAt);

  return (
    <div className="border border-gray-300 mb-5 rounded-xl p-2 w-1/2">
      <div className="flex">
        {renderIcons()}
        <h5 className="font-bold">{reportName}</h5>
      </div>
      <p className="text-sm fold-bold text-gray-400 mt-3">
        {Math.floor(Math.random() * 100) + 1} days ago
      </p>
    </div>
  );
}

export default ReportsCard;
