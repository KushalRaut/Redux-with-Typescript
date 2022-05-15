import * as actionTypes from './actionTypes';

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: 'first post',
      body: 'Hello here I am practising react redux with ts',
    },
    {
      id: 2,
      title: 'second post',
      body: 'my second post to just test out the first post',
    },
  ],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };

    case actionTypes.REMOVE_ARTICLE:
      const upDatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id
      );
      return {
        ...state,
        articles: upDatedArticles,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
