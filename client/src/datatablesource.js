
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Nama Mobil",
    width: 300,
  },

  {
    field: "age",
    headerName: "Tahun Mobil",
    width: 300,
  },
  {
    field: "passengers",
    headerName: "Penumpang",
    width: 300
  },
];