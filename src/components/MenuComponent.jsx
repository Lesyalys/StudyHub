import { Contacts } from "./Contacts.jsx";

export function MenuComponent({ data, setData }) {
  return (
    <div className="w-full lg:w-80 xl:w-96 shrink-0">
      <h2
        className="text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wide px-1"
        style={{ color: "var(--text)" }}
      >
        Выберите год
      </h2>

      <ul className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {Array.from({ length: data.allYears }).map((_, i) => {
          const yearNumber = i + 1;
          const isSelected = data.yearNumber === yearNumber;

          return (
            <li
              key={i}
              onClick={() => setData({ ...data, yearNumber: yearNumber })}
              className={`
              relative shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 
              text-xs sm:text-sm font-medium
              border rounded-lg
              transition-all duration-200 cursor-pointer 
              whitespace-nowrap lg:whitespace-normal
              ${isSelected ? "shadow-md" : "hover:shadow-sm"}
            `}
              style={{
                borderColor: isSelected
                  ? "var(--btn-hover-bg)"
                  : "var(--btn-color-border)",
                backgroundColor: isSelected
                  ? "var(--btn-hover-bg)"
                  : "transparent",
                color: isSelected ? "var(--btn-hover-text)" : "var(--text)",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = "var(--btn-hover-bg)";
                  e.currentTarget.style.color = "var(--btn-hover-text)";
                  e.currentTarget.style.borderColor =
                    "var(--btn-color-border-hover)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.borderColor = "var(--btn-color-border)";
                }
              }}
            >
              {isSelected && (
                <span
                  style={{ backgroundColor: "var(--btn-hover-text)" }}
                ></span>
              )}

              <span className="relative z-10">Год {yearNumber}</span>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:block mt-6">
        <Contacts />
      </div>
    </div>
  );
}
