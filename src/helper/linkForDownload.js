export const linkForDownload = async (setLoading, e, supabase, data) => {
  try {
    console.log(e.name);
    setLoading(true);
    const fileData = await supabase.getDownloadsData(e.name, data.yearName);

    if (fileData) {
      setLoading(false);
      const url = window.URL.createObjectURL(fileData);
      const link = document.createElement("a");

      link.href = url;
      link.download = `${e.name}`;
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  } catch (error) {
    console.error("Ошибка при скачивании:", error);
    alert("Не удалось скачать файл");
  } finally {
    setLoading(false);
  }
};
