import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Button from "../../components/elements/Button";
import SelectInput from "../../pages/beitHamidrash/sideBarSearch/SelectInput";

const MemuzagSideBarSearch = ({
  options,
  filter,
  onFilterChange,
  onSubmit,
  handleToggle,
}) => {
  const { responsive, colors, bgColors } = useContext(AppContext);

  const { talmuds, masecets, perakim, dapim } = options;

  const { selectedTalmud, selectedMasechet, selectedPerek, selectedDaf } =
    filter;

  // ערכי ברירת מחדל
  const defaultFilter = {
    selectedTalmud: "הכל",
    selectedMasechet: "הכל",
    selectedPerek: "הכל",
    selectedDaf: "הכל",
  };

  // הגדרת אפשרויות ברירת מחדל בעת טעינה
  useEffect(() => {
    if (!selectedTalmud && talmuds.length > 0) {
      onFilterChange({ selectedTalmud: defaultFilter.selectedTalmud });
    }
    if (!selectedMasechet && masecets.length > 0) {
      onFilterChange({ selectedMasechet: defaultFilter.selectedMasechet });
    }
    if (!selectedPerek && perakim.length > 0) {
      onFilterChange({ selectedPerek: defaultFilter.selectedPerek });
    }
    if (!selectedDaf && dapim.length > 0) {
      onFilterChange({ selectedDaf: defaultFilter.selectedDaf });
    }
  }, [
    talmuds,
    masecets,
    perakim,
    dapim,
    selectedTalmud,
    selectedMasechet,
    selectedPerek,
    selectedDaf,
    onFilterChange,
  ]);

  const styles = {
    container: {
      backgroundColor: bgColors.lightAzure,
      borderRadius: responsive(50, 0, 0),
      padding: 20,
      width: responsive("40%", "100%", "100%"),
      maxWidth: responsive(300, "100%", "100%"),
      maxHeight: responsive(500, "100vh", "100vh"),
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      marginLeft: 20,
    },
    label: {
      textAlign: "right",
      color: colors.azure,
      fontSize: 15,
      fontWeight: 500,
      width: responsive("90%", "50%", "50%"),
      marginBottom: 5,
      marginRight: 5,
    },
    buttonContainer: {
      marginTop: 20,
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  };

  // פילטר לשמירה על ערכים חוקיים בלבד
  const filterOptions = (options) => {
    return options.filter(
      (option) => option.value && option.value.trim() !== ""
    );
  };

  return (
    <form style={styles.container}>
      <div style={styles.label}>תלמוד</div>
      <SelectInput
        options={filterOptions(talmuds)}
        value={selectedTalmud || "הכל"}
        onChange={(e) => onFilterChange({ selectedTalmud: e.target.value })}
      />
      <div style={styles.label}>מסכת</div>
      <SelectInput
        options={filterOptions(masecets)}
        value={selectedMasechet || "הכל"}
        onChange={(e) => onFilterChange({ selectedMasechet: e.target.value })}
      />
      <div style={styles.label}>פרק</div>
      <SelectInput
        options={filterOptions(perakim)}
        value={selectedPerek || "הכל"}
        onChange={(e) => onFilterChange({ selectedPerek: e.target.value })}
      />
      <div style={styles.label}>דף</div>
      <SelectInput
        options={filterOptions(dapim)}
        value={selectedDaf || "הכל"}
        onChange={(e) => onFilterChange({ selectedDaf: e.target.value })}
      />
      <div style={styles.buttonContainer}>
        <Button
          text="חפש"
          onClick={(e) => {
            e.preventDefault(); // מונע רענון דף
            onSubmit();
          }}
          color={colors.azure}
          bgColor={bgColors.white}
        />
      </div>
      <Button
        color={colors.white}
        bgColor={bgColors.orangeGradient}
        hoveredBgColor={bgColors.darkBlueGradient}
        title={"בצע חיפוש"}
        fontSize={20}
        fontWeight={500}
        borderRadius={50}
        width={"90%"}
        arrow={true}
        onClick={handleToggle}
      />
    </form>
  );
};

export default MemuzagSideBarSearch;
