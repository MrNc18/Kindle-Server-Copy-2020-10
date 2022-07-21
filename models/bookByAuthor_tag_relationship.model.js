module.exports = (sequelize, Sequelize) => {
  const bookByAuthor_tag_relationship = sequelize.define(
    "bookByAuthor_tag_relationship",
    {
      bookId: {
        type: Sequelize.INTEGER(11),
      },
      tagId: {
        type: Sequelize.INTEGER(11),
      },
    },
    {
      timestamps: true,
    }
  );

  return bookByAuthor_tag_relationship;
};
