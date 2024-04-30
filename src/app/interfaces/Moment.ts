export interface Moment {
    id?: number;
    titulo: string;
    descricao: string;
    imagem: string;
    created_at?: string;
    updated_at?: string;
    comentarios?: [{ texto: string; usuario: string }];
  }
  