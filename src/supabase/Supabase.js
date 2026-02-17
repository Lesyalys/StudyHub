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
    // console.log(data);
    setData(data);
  }

  async getDownloadsData(datas, instruments) {
    const year = JSON.stringify(datas.name);
    const page = JSON.stringify(instruments);
    console.log(`${year}/${page}`);
    const { data } = await this.supabase.storage
      .from(`dataEducation`)
      .download(`${datas}/${{ instruments }}`);
    // console.log(data);
    return data;
  }
}
