// export async function getData(year) {
//   const SUPABASE_KEY = "5b15c9f7bada2c2fb3856a7f4dfc3eb7";
//   const url = `https://yalfphfnodprzkbfbxxq.supabase.co/storage/v1/object/list/dataEducation/${year}`; //
//   //   const url = `https://yalfphfnodprzkbfbxxq.supabase.co/storage/v1/object/public/dataEducation/${year}`;

//   const response = await fetch(url, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${SUPABASE_KEY}`,
//       apikey: SUPABASE_KEY,
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   console.log(data);
// }
