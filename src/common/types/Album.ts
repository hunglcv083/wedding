export interface albumType {
    album: number;
    list_sukien_video: itemAlbum[];
  }
export interface itemAlbum {
    loai_sukien: string,
    album: string,
    link_src_goc: string,
    link_tar_goc: string,
    link_da_swap: string,
    id_user:number
  }