import { teachers } from "../contacts/teacher.json";

export function Contacts() {
  // console.log(teachers)
  return (
    <div className="pt-2">
      <strong
        className="text-lg font-semibold block mb-3"
        style={{ color: "var(--text)" }}
      >
        Контакты преподавателей
      </strong>

      <ul
        className="w-full max-h-80 overflow-y-auto rounded-lg space-y-3 p-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "var(--text) rgba(255, 255, 255, 0.1)",
        }}
      >
        {teachers.map((e, i) => (
          <li
            key={i}
            className="border rounded-lg p-4 transition-all duration-200 hover:shadow-md"
            style={{
              borderColor: "var(--btn-color-border)",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
            }}
          >
            <h2
              className="text-base font-bold mb-2 pb-1 border-b"
              style={{
                color: "var(--text)",
                borderColor: "var(--btn-color-border)",
              }}
            >
              {e?.name}
            </h2>

            {e?.subjects && e.subjects.length > 0 && (
              <div className="mb-3">
                <p
                  className="text-xs uppercase tracking-wider mb-1 opacity-60"
                  style={{ color: "var(--text)" }}
                >
                  Предметы:
                </p>
                <div className="flex flex-wrap gap-1">
                  {e.subjects.map((e2, i2) => (
                    <span
                      key={i2}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--btn-hover-bg)",
                        color: "var(--btn-hover-text)",
                        opacity: 0.9,
                      }}
                    >
                      {e2}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-1 text-sm">
              {e?.telegram && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://t.me/${e.telegram}`}
                  className="flex items-center gap-2 transition-colors duration-200 hover:translate-x-1"
                  style={{ color: "var(--text)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--btn-hover-bg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                >
                  <span className="text-lg">📱</span>
                  <span className="truncate">{e.telegram}</span>
                </a>
              )}

              {e?.telegram_number && (
                <div
                  className="flex items-center gap-2"
                  style={{ color: "var(--text)" }}
                >
                  <span className="text-lg">📞</span>
                  <span>{e.telegram_number}</span>
                </div>
              )}

              {e?.email && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${e.email}`}
                  className="flex items-center gap-2 transition-colors duration-200 hover:translate-x-1"
                  style={{ color: "var(--text)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--btn-hover-bg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                >
                  <span className="text-lg">📧</span>
                  <span className="truncate">{e.email}</span>
                </a>
              )}

              {e?.vk && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://vk.com/${e.vk}`}
                  className="flex items-center gap-2 transition-colors duration-200 hover:translate-x-1"
                  style={{ color: "var(--text)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--btn-hover-bg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                >
                  <span className="text-lg">📘</span>
                  <span className="truncate">{e.vk}</span>
                </a>
              )}
            </div>
          </li>
        ))}

        {teachers.length === 0 && (
          <li
            className="text-center py-8 rounded-lg"
            style={{ color: "var(--text)", opacity: 0.6 }}
          >
            Нет доступных контактов
          </li>
        )}
      </ul>
    </div>
  );
}
