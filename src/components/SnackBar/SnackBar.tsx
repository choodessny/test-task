import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/useAppSelector";

const SnackBar: React.FC = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const user = useAppSelector((store) => store.userData.user);
  useEffect(() => {
    if (user) {
      setOpened(true);
    }
  }, [user]);
  return (
    <Snackbar
      open={opened}
      autoHideDuration={5000}
      onClose={() => setOpened(false)}
    >
      <Alert onClose={() => setOpened(false)} severity="success">
        <div>
          {user?.id}, {user?.name}
        </div>
      </Alert>
    </Snackbar>
  );
};
export default SnackBar;
