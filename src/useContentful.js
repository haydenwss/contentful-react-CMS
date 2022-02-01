import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "5r06epcp3ami",
    accessToken: "JTMwOtftISU89HoXx18HYenH-keKnDg8Kg_i-k4EuAo",
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
