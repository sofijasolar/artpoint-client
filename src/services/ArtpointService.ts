import axios from "axios";

const ArtpointService = (
    () => {
        const artpointApiEndpoints = {
            users: "https://localhost:3001/api/users",
            artworks: "https://localhost:3001/api/artworks"
        }

        const getAllArtworks = async () => {
            const result = await axios.get(artpointApiEndpoints.artworks);
            return result.data;
        }

    }
)();