type Idea = {
	id: String;
	title: String;
	description: String;
	type: String;
	tags: String[];
	image: String;
	rates: Idea_rating[];
};
type Idea_rating = {
	id: String;
	Idea: Idea;
	IdeaId: String;
	rate: Int;
};
