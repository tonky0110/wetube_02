export const home = (req, res) => res.render("Home");
export const search = (req, res) => res.send("Search");

export const videos = (req, res) => res.send("Video index");
export const upload = (req, res) => res.send("Video update");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
