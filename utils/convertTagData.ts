interface TagsType {
  stackType: string;
  url: null;
}

const convertTagData = (tags: TagsType[]) => {
  return tags.map((item) => item.stackType);
};

export default convertTagData;
