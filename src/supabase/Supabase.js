import { createClient } from "@supabase/supabase-js";

export class SupabaseClass {
  constructor() {
    this.supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    );
  }

  //   async downloadData(name) {
  //     this.supabase.getFiles(name);
  //   }

  async getFiles(setInstruments) {
    const { data, error } = await this.supabase.storage
      .from("dataEducation")
      .list();
    if (error) console.error(error);
    console.log(data);
    setInstruments(data);
  }

  async getFilesOnName(setData, datas) {
    const { data } = await this.supabase.storage
      .from(`dataEducation`)
      .list(datas);
    console.log(data);
    setData({ dataYear: data, yearName: datas });
  }

  async getDownloadsData(courseName, yearName) {
    console.log(`${yearName}/${courseName}/${courseName}.zip`);
    try {
      const { data, error } = await this.supabase.storage
        .from("dataEducation")
        .download(`${yearName}/${courseName}/${courseName}.zip`);

      if (error) {
        console.error("Ошибка при скачивании:", error);
        return null;
      }

      if (!data) {
        console.error("Файл не найден или пуст");
        return null;
      }

      console.log("Файл успешно загружен:", data);
      return data;
    } catch (err) {
      console.error("Исключение при скачивании:", err);
      return null;
    }
  }
}
