import javax.swing.*;
import java.awt.*;

public class SpamAndEggsVisual extends JFrame {

    public SpamAndEggsVisual() {
        setTitle("Spam and Eggs");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        drawSpam(g);
        drawEggs(g);
    }

    private void drawSpam(Graphics g) {
        g.setColor(Color.RED);
        g.fillOval(100, 150, 100, 50); // Spam oval shape
    }

    private void drawEggs(Graphics g) {
        g.setColor(Color.YELLOW);
        g.fillOval(250, 150, 50, 70); // Egg oval shape
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new SpamAndEggsVisual());
    }
}