import { useTranslation } from "react-i18next";
import "./i18n";
import Tasks from "./tasks";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{t("greeting.spiel")}</h1>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => i18n.changeLanguage("ar")}
        >
          العربية
        </button>
      </div>
      <Tasks />
    </div>
  );
}

export default App;
