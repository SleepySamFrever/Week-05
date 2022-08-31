//Week 5 coding assignment.

//Album Playlist
//Album name, artist, genre

//First we need a couple classes
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

class Playlist {
    constructor(playlistName) {
        this.playlistName = playlistName
        this.albumList = [];
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

class Menu {
    constructor() {
        this.playlists = [];
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
                    this.displayPlaylists();
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
    displayPlaylists() {
        let playlistString = '';
        for (let i = 0; i < this.playlists.length; i++) {
            playlistString += i + ') ' + this.playlists[i].name + '\n';
        }
        alert(playlistString);
    }
    createPlaylist() {
        let playlistName = prompt('What would you like to name your created playlist?');
        this.playlists.push(new Playlist(playlistName));
    }
    viewPlaylist() {
        let index = prompt(`Enter the index of the playlist you wish to view:`);
        if (index > -1 && index < this.playlists.length) {
            this.selectedPlaylist = this.playlists[index];
            let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n';
            for (let i = 0; i < this.selectedPlaylist.playlists.length; i++) {
                description += i + ') ' + this.selectedPlaylist.albums[i].albumName + ' - ' + this.selectedPlaylist.albums[i].artistName + ' - ' + this.selectedPlaylist.albums[i].genre + '\n';
            }
            let selection = this.showPlaylistMenuOptions(description)
            switch (selection) {
                case '1':
                    this.creatAlbum();
                    break;
                case '2':
                    this.deleteAlbum();
            }
        }
    }
    deletePlaylist() {
        let index = prompt('Enter the index of the playlist you wish to delete:');
        if (index > -1 && index < this.playlists.length) {
            this.playlists.splice(index, 1);
        }
    }
    addAlbum() {
        let albumName = prompt('Enter name for new album:');
        let artistName = prompt('Enter the artists name:');
        let genre = prompt('What genre is this artist/album?');
        this.selectedPlaylist.albums.push(new Album(albumName, artistName, genre));

    }
    deleteAlbum() {
        let index = prompt('Enter the index of the album you wish to delete:');
        if (index > -1 && index < this.selectedPlaylist.albums.length) {
            this.selectedPlaylist.albums.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();