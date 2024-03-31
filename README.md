# Addis Software Test Project 
### Done By Natnael Yohannes

#### Deploied on **Vercel** [Open](https://music-app-six-coral.vercel.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Simple Python API with flask code.

```
from flask import Flask, request, jsonify
import uuid
from flask_cors import CORS





app = Flask(__name__)
CORS(app)

data = [
    {
        "uuid": "b303eb7a-4cc6-4bc2-8950-7d6e1884101b",
        "music_name": "Sapphire Serenade",
        "Artist_name": "Lunar Eclipse",
        "link": "http://music/name.mp3",
        "date": ["2024-03-26"]
    },
    {
        "uuid": "d6cf58e4-1021-469e-b25b-4768b7e1c42e",
        "music_name": "Whispering Willow",
        "Artist_name": "Ethereal Dream",
        "link": "http://music/name.mp3",
        "date": ["2024-03-26"]
    },
    ......
    ]


@app.route('/', methods=['GET'])
def get_music():
    return jsonify(data)


@app.route('/', methods=['POST'])
def create_music():
    new_item = request.json
    new_item['uuid'] = str(uuid.uuid4())
    data.append(new_item)
    return jsonify(new_item), 201


@app.route('/<string:item_id>', methods=['PUT'])
def update_music(item_id):
    updated_item = request.json
    for item in data:
        if item['uuid'] == item_id:
            item.update(updated_item)
            return jsonify(item)
    return "Item not found", 404


@app.route('/<string:item_id>', methods=['DELETE'])
def delete_music(item_id):
    for item in data:
        if item['uuid'] == item_id:
            data.remove(item)
            return '', 204
    return "Item not found", 404




if __name__ == "__main__":
    app.run(port=6326)

```

