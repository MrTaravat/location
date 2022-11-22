async function getInfo() {
  const res = await fetch("http://ipwho.is/");

  return await res.json();
}
export default getInfo;
