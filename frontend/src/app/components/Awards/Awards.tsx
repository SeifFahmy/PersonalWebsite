import awards from "@/app/data/awards";
import styles from "./Awards.module.css";

const Awards = () => {
    return (
        <div className={styles.container}>
            <h3>Awards</h3>
            <p>
                veniam est aute cillum commodo dolore mollit tempor aute
                reprehenderit culpa laborum sunt consequat et adipisicing
                consequat laborum sit ad
            </p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Award</th>
                        <th>From</th>
                        <th>No. of Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {awards.map((award, i) => (
                        <tr key={i}>
                            <td>{award.award}</td>
                            <td>{award.from}</td>
                            <td>{award.number}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}>Number of awards</td>
                        <td>
                            {"x" +
                                awards.reduce(
                                    (number, additional) =>
                                        number +
                                        parseInt(
                                            additional.number.substring(1)
                                        ),
                                    0
                                )}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Awards;
