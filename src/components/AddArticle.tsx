import React, { useState } from 'react';

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({ ...article, [e.currentTarget.id]: e.currentTarget.value });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  );
};

export default AddArticle;
