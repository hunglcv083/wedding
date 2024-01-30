export interface albumType {
    album: number;
    list_sukien_video: itemAlbum[];
  }
export interface itemAlbum {
    loai_sukien: string,
    album: string,
    id_saved:string,
    id_sk_album:string,
    link_src_goc: string,
    link_tar_goc: string,
    link_da_swap: string,
    id_user:number
  }
export interface listItemType {
    album: number;
    list_sukien_image: itemType[];
  }
export interface itemType {
    loai_sukien: string,
    id_saved?: string,
    link_da_swap: string,
    id_sk_swap_album:string,
    link_src_goc:string,
    link_tar_goc:string,
    id_user: number,
    album: string,
    thoigian_sukien: string
  }