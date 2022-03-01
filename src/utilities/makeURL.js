export default function makeURL(url) {
  return `${
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000/"
  }${url}`;
}
