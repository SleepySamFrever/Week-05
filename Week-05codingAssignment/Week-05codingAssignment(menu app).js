//Week 5 coding assignment.

//Album Playlist
//Album name, artist, genre

//First we need a couple classes

//I'll start with my album class
class Album {
    constructor(albumName, artistName, genre) {
        this.albumName = albumName;
        this.artistName = artistName;
        this.genre = genre;
    }
    description() {
        return `${this.albumName} from ${this.artistName}(${this.genre})`;
    }
}
//Below is my Playlist class.
class Playlist {
    constructor(playlistName) {
        this.playlistName = playlistName
        this.albumList = []; //albumList is an empty array we will push to when we add an album.
    }
    addAlbum(album) {
        if (album instanceof Album){
            this.albumList.push(album);
        } else {
            throw new Error(`Album (${album}) was not found.`);
        }
    }
    description() {
        return `${this.albumList} has ${this.albumList.length} albums.`;
    }
}
//Below is my Menu class.
class Menu {
    constructor() {
        this.albumList = [];
        this.selectedPlaylist = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createPlaylist();
                    break;
                case '2':
                    this.viewPlaylist();
                    break;
                case '3':
                    this.deletePlaylist();
                    break;
                case '4':
                    this.displayalbumList();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) Create a new playlist
        2) View playlist
        3) Delete a playlist
        4) Display all your playlists
        `);
    }
    showPlaylistMenuOptions(playlistInfo) {
        return prompt(`
         0) back
         1) add album
         2) delete album
         ----------------
         ${playlistInfo}
        `);
    }
    displayalbumList() {
        let albumListtring = '';
        for (let i = 0; i < this.albumList.length; i++) {
            albumListtring += i + ') ' + this.albumList[i].name + '\n';
        }
        alert(albumListtring);
    }
    createPlaylist() {
        let playlistName = prompt('What would you like to name your created playlist?');
        this.albumList.push (new Playlist(playlistName));
    }
    viewPlaylist() {
        let index = prompt(`Enter the index of the playlist you wish to view:`);
        if (index > -1 && index < this.albumList.length) {
            this.selectedPlaylist = this.albumList[index];
            let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n';
            for (let i = 0; i < this.selectedPlaylist.albumList.length; i++) {
                description += i + ') ' + this.selectedPlaylist.albumList[i].albumName + ' - ' + this.selectedPlaylist.albumList[i].artistName + ' - ' + this.selectedPlaylist.albumList[i].genre + '\n';
            }
            let selection = this.showPlaylistMenuOptions(description)
            switch (selection) {
                case '1':
                    this.createAlbum();
                    break;
                case '2':
                    this.deleteAlbum();
            }
        }
    }
    deletePlaylist() {
        let index = prompt('Enter the index of the playlist you wish to delete:');
        if (index > -1 && index < this.albumList.length) {
            this.albumList.splice(index, 1);
        }
    }
    createAlbum() {
        let albumName = prompt('Enter name for new album:');
        let artistName = prompt('Enter the artists name:');
        let genre = prompt('What genre is this artist/album?');
        this.selectedPlaylist.albumList.push(new Album(albumName, artistName, genre));

    }
    deleteAlbum() {
        let index = prompt('Enter the index of the album you wish to delete:');
        if (index > -1 && index < this.selectedPlaylist.albumList.length) {
            this.selectedPlaylist.albumList.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();