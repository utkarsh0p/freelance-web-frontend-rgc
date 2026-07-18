import { useEffect } from "react";

type Props = { title: string; description?: string };

export default function PageMeta({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]',
      );
      if (meta) meta.content = description;
    }
  }, [title, description]);
  return null;
}
